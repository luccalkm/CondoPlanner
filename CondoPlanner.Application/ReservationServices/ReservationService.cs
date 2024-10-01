using AutoMapper;
using CondoPlanner.Application.DTOs;
using CondoPlanner.Application.ReservationServices.Reservations;
using CondoPlanner.Domain.Entities;
using CondoPlanner.Infrastructure.Persistence.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace CondoPlanner.Application.Services
{
    public class ReservationService : IReservationService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ReservationService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ReservationDto>> GetAllReservationsAsync()
        {
            var reservations = await _context.Reservations
                                    .AsNoTracking()
                                    .ToListAsync();

            return _mapper.Map<IEnumerable<ReservationDto>>(reservations);
        }

        public async Task<ReservationDto> GetReservationByIdAsync(int id)
        {
            var reservation = await _context.Reservations
                                   .AsNoTracking()
                                   .FirstOrDefaultAsync(c => c.Id == id);

            return _mapper.Map<ReservationDto>(reservation);
        }

        public async Task<ResponseDto<ReservationDto>> CreateOrUpdateReservationAsync(CreateOrEditReservationDto input)
        {
            Reservation reservation;

            if (input.Id == 0)
            {
                reservation = _mapper.Map<Reservation>(input);
                _context.Reservations.Add(reservation);
                await _context.SaveChangesAsync();

                var reservationDto = _mapper.Map<ReservationDto>(reservation);

                return new ResponseDto<ReservationDto>
                {
                    Success = true,
                    Message = "Reserva criada com sucesso.",
                    Data = reservationDto
                };
            }
            else
            {
                reservation = await _context.Reservations.FindAsync(input.Id);
                if (reservation == null)
                {
                    return new ResponseDto<ReservationDto>
                    {
                        Success = false,
                        Message = "Reserva não encontrada.",
                        Data = null
                    };
                }

                _mapper.Map(input, reservation);

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return new ResponseDto<ReservationDto>
                    {
                        Success = false,
                        Message = "Ocorreu um erro ao atualizar a reserva.",
                        Data = null
                    };
                }

                var reservationDtoUpdated = _mapper.Map<ReservationDto>(reservation);

                return new ResponseDto<ReservationDto>
                {
                    Success = true,
                    Message = "Reserva atualizada com sucesso.",
                    Data = reservationDtoUpdated
                };
            }
        }

        public async Task<ResponseDto<string>> DeleteReservationAsync(int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return new ResponseDto<string>
                {
                    Success = false,
                    Message = "Reserva não encontrada.",
                    Data = null
                };
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();

            return new ResponseDto<string>
            {
                Success = true,
                Message = "Reserva deletada com sucesso.",
                Data = $"Reserva com ID {id} foi removida."
            };
        }
    }
}
