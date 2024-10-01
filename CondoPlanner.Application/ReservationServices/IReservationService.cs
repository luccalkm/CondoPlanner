using CondoPlanner.Application.DTOs;
using CondoPlanner.Application.ReservationServices.Reservations;

namespace CondoPlanner.Application.Services
{
    public interface IReservationService
    {
        Task<IEnumerable<ReservationDto>> GetAllReservationsAsync();
        Task<ReservationDto> GetReservationByIdAsync(int id);
        Task<ResponseDto<ReservationDto>> CreateOrUpdateReservationAsync(CreateOrEditReservationDto input);
        Task<ResponseDto<string>> DeleteReservationAsync(int id);
    }
}
