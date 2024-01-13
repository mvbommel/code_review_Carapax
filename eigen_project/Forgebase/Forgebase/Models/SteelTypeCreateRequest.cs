using System.ComponentModel.DataAnnotations;

namespace Forgebase.Models
{
    public class SteelTypeCreateRequest
    {
        public string name { get; set; }
        public bool stainless { get; set; }
        public bool hardenable { get; set; }
    }
}
