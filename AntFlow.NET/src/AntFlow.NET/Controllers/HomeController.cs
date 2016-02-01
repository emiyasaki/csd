using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AntFlow.NET.Model;

namespace AntFlow.NET.Controllers
{
    public class HomeController : Controller
    {
        private IMulaRepository repo;

        public HomeController(IMulaRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet("/")]
        public IActionResult Index()
        {
            return View(repo.GetDestinos());
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
