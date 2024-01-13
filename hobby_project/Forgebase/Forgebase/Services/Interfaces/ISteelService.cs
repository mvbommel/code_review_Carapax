using Forgebase.Models;

namespace Forgebase.Services.Interfaces
{
    public interface ISteelService
    {
        public List<SteelType> GetAllSteelTypes();

        public bool AddSteelType(SteelTypeCreateRequest request);
        public bool DeleteSteelType(int id);
        public SteelType GetSteelTypeById(int id);
    }
}
