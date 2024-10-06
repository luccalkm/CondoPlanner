import { Configuration, ErrorContext, ResponseContext } from '../apiClient';

const token = localStorage.getItem('token');

export const ApiConfiguration = new Configuration({
    basePath: "https://localhost:7254",
    headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    },

    middleware: [
        {
            onError: async (context: ErrorContext) => {
                const contentType = context.response?.headers.get('content-type');
                if (contentType && contentType.includes('json')) {
                    const json = await context.response?.json();
                    throw new Error(json.message);
                }
                return context.response;
            }
        },
        {
            post: async (context: ResponseContext) => {
                const ret = context.response;
                const contentType = context.response.headers.get('content-type');
                if (contentType && contentType.includes('json')) {
                    if ([400, 401, 500].includes(context.response.status)) {
                        const json = await context.response.json();
                        throw new Error(`${json?.message || json?.error?.message}`);
                    } else {
                        const jsonClone = async () => {
                            const result = await ret.clone().json();
                            return result;
                        };
                        ret.json = jsonClone;
                    }
                }
                return ret;
            }
        }
    ]
});
