using AspNetCore.Models;
using NetCoreLibrary.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore.Services
{
    public interface IPersonaService
    {
        Persona PersonaDiTest();
    }

    public class PersonaServiceMock: IPersonaService
    {
        public Persona PersonaDiTest()
        {
            var p = new Persona();
            p.Nome = "Mario (mock)";
            p.Cognome = "Rossi";
            p.Email = "mario@rossi.it";

            return p;
        }
    }

    public class PersonaService : IPersonaService
    {
        public Persona PersonaDiTest()
        {
            var p = new Persona();
            p.Nome = "Mario (vero)";
            p.Cognome = "Rossi";
            p.Email = "mario@rossi.it";

            return p;
        }
    }

}
