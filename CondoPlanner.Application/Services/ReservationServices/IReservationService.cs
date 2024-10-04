using CondoPlanner.Application.Services.CommonDTOs;
using CondoPlanner.Application.Services.ReservationServices.DTOs;

namespace CondoPlanner.Application.Services.ReservationServices
{
    public interface IReservationService
    {
        Task<IEnumerable<ReservationDto>> GetAllReservationsAsync();
        Task<ReservationDto> GetReservationByIdAsync(int id);
        Task<ResponseDto<ReservationDto>> CreateOrUpdateReservationAsync(CreateOrEditReservationDto input);
        Task<ResponseDto<string>> DeleteReservationAsync(int id);
    }
}
