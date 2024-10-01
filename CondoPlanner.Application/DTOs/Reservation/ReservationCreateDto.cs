using CondoPlanner.Application.DTOs.CommomArea;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs.Reservation
{
    public class ReservationCreateDto
    {
        public int Id { get; set; }
        public DateTime ReservationDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public decimal TotalCost { get; set; }
        public int CommonAreaId { get; set; }
        public CommonAreaDto CommonArea { get; set; }
        public string UserId { get; set; }
    }
}
