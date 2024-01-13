using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Forgebase.Models;
using Forgebase.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace Forgebase.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ProjectController : Controller
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public List<Project> GetAllProjects()
        {
            return _projectService.GetProjects();
        }

        [HttpGet("id/{id}")]
        public Project GetProjectById(int id)
        {
            return _projectService.GetProjectById(id);
        }

        [HttpPost(Name = "CreateProject")]
        public IActionResult CreateProject(ProjectCreateRequest request)
        {
            int id = _projectService.CreateProject(request);
            if (id == 0)
            {
                return BadRequest("can not create project, check if all values are filled");
            }
            else
            {
                return Ok(id);
            }
        }

        [HttpPut]
        public IActionResult EditProject(ProjectCreateRequest project)
        {
            Project resultProject = _projectService.EditProject(project);
            if (resultProject == null) return NotFound();
            return Ok(resultProject);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProject(int id)
        {
            if (_projectService.DeleteProject(id))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut("stage")]
        public IActionResult EditProjectStage(int id, int stage)
        {
            Project project = _projectService.ChangeProjectStage(id, stage);
            if (project == null) return NotFound();
            return Ok(project);
        }
    }
}
