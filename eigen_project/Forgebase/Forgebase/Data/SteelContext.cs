using Forgebase.Models;
using Microsoft.EntityFrameworkCore;

namespace Forgebase.Data
{
    public class SteelContext
    {
        private readonly Context _context;

        public SteelContext(Context context)
        {
            _context = context;
        }

        public int AddSteelType(SteelType steelType)
        {
            _context.SteelTypes.Add(steelType);
            _context.SaveChanges();
            return steelType.id;
        }

        public bool DeleteSteelType(int id)
        {
            try
            {
                SteelType type = _context.SteelTypes.FirstOrDefault(t => t.id == id);
                _context.SteelTypes.Remove(type);
                _context.SaveChanges();
                return true;
            } 
            catch 
            {
                return false;            
            }
        }

        public List<SteelType> GetAllSteelTypes()
        {
            List<SteelType> steelTypes = _context.SteelTypes.ToList();
            return steelTypes;
        }

        public SteelType GetSteelTypeById(int id)
        {
            return _context.SteelTypes.FirstOrDefault(s => s.id == id);
        }
    }
}
