using Microsoft.EntityFrameworkCore;

namespace WebApp.Models
{
    public class AtividadeContext : DbContext
    {

        public AtividadeContext(DbContextOptions<AtividadeContext> options) :
            base(options)
        {

        }
        public DbSet<Atividade> Atividades { get; set; }

    }
}
