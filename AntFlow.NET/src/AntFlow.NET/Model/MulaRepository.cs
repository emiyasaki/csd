using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AntFlow.NET.Model
{
    public class MulaRepository : IMulaRepository
    {
        private IList<Mula> mulas = new List<Mula>() {
            new Mula()
            {
                Id = 0,
                Nome = "Anastácia",
                Idade = 30,
                Profissao = "Aeromoça",
                Descricao = "Lorem ipsum",
                Data = DateTime.Today.AddMonths(1),
                Origem = "Londres",
                Destino = "São Paulo-SP"
            },
            new Mula()
            {
                Id= 1,
                Nome= "Vanessa",
                Idade= 38,
                Profissao= "Dona de casa",
                Descricao= "Bla bla",
                Data= DateTime.Today.AddMonths(2),
                Origem= "Colonia",
                Destino= "São Paulo-SP"
            },
            new Mula()
            {
                Id= 2,
                Nome= "Jordânia",
                Idade= 24,
                Profissao= "Garçonete",
                Descricao= "bla bla bla",
                Data= DateTime.Today.AddDays(15),
                Origem= "Nova Iorque",
                Destino= "Franca-SP"
            },
            new Mula()
            {
                Id= 3,
                Nome= "Camila",
                Idade= 25,
                Profissao= "Assistente de Marketing",
                Descricao= "bla bla bla",
                Data= DateTime.Today.AddDays(15),
                Origem= "Los Angeles",
                Destino= "Porto Alegre-RS"
            }
        };

        IList<string> IMulaRepository.GetDestinos()
        {
            return mulas.GroupBy(x => x.Destino)
                .Select(grp => grp.Key)
                .ToList();
        }

        IList<Mula> IMulaRepository.GetMulas()
        {
            return mulas;
        }

        IList<Mula> IMulaRepository.GetMulasByDestination(string Destination)
        {
            return mulas.Where(x => x.Destino == Destination).ToList();
        }
    }
}
