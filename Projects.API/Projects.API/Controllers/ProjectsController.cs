using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projects.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projects.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private ProjectService projectService;
        public ProjectsController(ProjectService projectService)
        {
            this.projectService = projectService;
        }
        [HttpGet]
        public IActionResult GetProjects()
        {
            return Ok(this.projectService.GetProjects());
        }
        [HttpGet("{id}")]
        public IActionResult GetProjectByCategoryId(int id)
        {
            if (id==0)
            {
                return BadRequest();
            }
            return Ok(this.projectService.GetProjectsByCategoryId(id));
        }
    }
}
