﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.DTOs
{
    public class ReservationDto
    {
        public int Id { get; }
        public DateTime ReservationDate { get; }
        public TimeSpan StartTime { get; }
        public TimeSpan EndTime { get; }
        public decimal TotalCost { get; }
        public int CommonAreaId { get; }
        public CommonArea CommonArea { get; }
        public string UserId { get; }
    }
}
