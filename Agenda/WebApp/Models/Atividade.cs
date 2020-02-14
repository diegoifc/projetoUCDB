using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    [Table("atividade")]
    public class Atividade
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "varchar(100)")]

        public string nome { get; set; }
        [Column(TypeName = "date")]
        public DateTime datarealizada { get; set; }
        [Column(TypeName = "date")]
        public DateTime datafim { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string descricao { get; set; }
        [Column(TypeName = "int")]
        public int importante { get; set; }

    }
}
