using Microsoft.Extensions.Logging;
using OreLavorateLib.Context;

namespace OreLavorateLib.Services
{
    public interface IUtenteService
    {
        bool Login(string username, string password);
    }
    public class UtenteService: IUtenteService
    {
        private readonly OrelavorateContext _ctx;
        private readonly ILogger<UtenteService> _log;
        public UtenteService(OrelavorateContext ctx, ILogger<UtenteService> log)
        {
            _ctx = ctx;
            _log = log;
        }

        public bool Login(string username, string password)
        {
            _log.LogInformation($"trying to login {username}");
            var u = _ctx.Utentes.Find(username);
            return (u != null && u.Password == password);
        }
    }
}
