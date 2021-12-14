using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projects.API.Models
{
    public class Task
    {
        /*
         * public id?:number,
                public name?:string,
                public expectedDate?: Date,
                public projectId?:number,
                public isCompleted?:boolean
         */

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime ExpectedDate { get; set; }
        public int? ProjectId { get; set; }
        public bool IsCompleted { get; set; } = false;
    }
}
