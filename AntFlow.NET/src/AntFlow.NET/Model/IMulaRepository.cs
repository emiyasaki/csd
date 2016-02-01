using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AntFlow.NET.Model
{
    public interface IMulaRepository
    {
        IList<string> GetDestinos();
        IList<Mula> GetMulas();
        IList<Mula> GetMulasByDestination(string Destination);
    }
}
