using CondoPlanner.Application.Services.CondominiumServices.DTOs;

namespace CondoPlanner.Application.Services.CondominiumServices
{
    public interface ICondominiumService
    {
        Task<CondominiumDto> GetCondominiumDetailsAsync(int condominiumId);
        Task DeleteCondominiumAsync(int id);
        Task<CondominiumDto> CreateCondominiumAsync(CondominiumCreateDto input);
        Task<IEnumerable<CondominiumDto>> GetCondominiumFromUserId(string userId);
    }
}
