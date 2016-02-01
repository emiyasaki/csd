using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AntFlow.NET.Model;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AntFlow.NET.Controllers
{
    [Route("[controller]")]
    public class DestinationController : Controller
    {
        private IMulaRepository repo;

        public DestinationController(IMulaRepository repo)
        {
            this.repo = repo;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(repo.GetMulas());
        }

        [HttpGet("{dest}")]
        public IActionResult Index(string dest)
        {
            var result = repo.GetMulasByDestination(dest);
            return View(result);
        }
    }
}
