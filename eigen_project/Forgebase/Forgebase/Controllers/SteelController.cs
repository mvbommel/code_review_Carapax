using Forgebase.Models;
using Forgebase.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Forgebase.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SteelController : Controller
    {
        private readonly ISteelService _steelService;

        public SteelController(ISteelService steelService)
        {
            _steelService = steelService;
        }

        [HttpGet]
        public List<SteelType> getAllSteelTypes()
        {
            return _steelService.GetAllSteelTypes();
        }

        [HttpPost]
        public bool addSteelType(SteelTypeCreateRequest request)
        {
            return _steelService.AddSteelType(request);
        }

        [HttpDelete("{id}")] 
        public bool deleteSteelType(int id)
        {
            return _steelService.DeleteSteelType(id);
        }
    }
}
