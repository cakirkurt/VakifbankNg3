using Projects.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projects.API.Services
{
    public class ProjectService
    {
        private List<Project> projects;
        public List<Project> GetProjects()
        {
            return projects;
        }

        public List<Project> GetProjectsByCategoryId(int id)
        {
            return projects.Where(p => p.CategoryId == id).ToList();
        }

        public ProjectService()
        {
            projects = new List<Project>
            {
                new Project{ Id=1, Name="Project A", CategoryId=1, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },
                 new Project{ Id=2, Name="Project B", CategoryId=2, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },
                  new Project{ Id=3, Name="Project C", CategoryId=3, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },
                   new Project{ Id=4, Name="Project D", CategoryId=1, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },
                    new Project{ Id=5, Name="Project E", CategoryId=2, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },
                     new Project{ Id=6, Name="Project F", CategoryId=3, CompleteRate=0.45, Description="Description A", StartDate=new DateTime(2021,10,15), Details="Details of Project A", Tasks = new List<Models.Task>{
                    new Models.Task{ Id=1, ExpectedDate=DateTime.Now.AddDays(5), Name="Task 1", ProjectId=1},
                    new Models.Task{ Id=2, ExpectedDate=DateTime.Now.AddDays(7), Name="Task 2", ProjectId=1},

                } },

            };
        }

        internal Project AddProject(Project project)
        {
            project.Id = projects[projects.Count - 1].Id + 1;
            projects.Add(project);
            return project;
        }
    }
}
