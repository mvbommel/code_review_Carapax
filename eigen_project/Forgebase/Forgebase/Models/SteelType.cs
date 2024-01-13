using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Forgebase.Models
{
    public class SteelType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public bool stainless { get; set; }
        [Required]
        public bool hardenable { get; set; }
    }
}
