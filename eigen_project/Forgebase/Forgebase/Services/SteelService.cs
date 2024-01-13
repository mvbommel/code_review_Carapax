using Forgebase.Data;
using Forgebase.Models;
using Forgebase.Services.Interfaces;

namespace Forgebase.Services
{
    public class SteelService : ISteelService
    {
        private readonly SteelContext _context;

        public SteelService(SteelContext context)
        {
            _context = context;
        }

        public bool AddSteelType(SteelTypeCreateRequest request)
        {
            SteelType steelType = mapRequestToSteelType(request);
            if(_context.AddSteelType(steelType) != 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool DeleteSteelType(int id)
        {
            return _context.DeleteSteelType(id);
        }

        public List<SteelType> GetAllSteelTypes()
        {
            return _context.GetAllSteelTypes();
        }

        public SteelType GetSteelTypeById(int id)
        {
            return _context.GetSteelTypeById(id);
        }

        private SteelType mapRequestToSteelType(SteelTypeCreateRequest request)
        {
            return new SteelType()
            {
                name = request.name,
                stainless = request.stainless,
                hardenable = request.hardenable
            };
        }
    }
}
