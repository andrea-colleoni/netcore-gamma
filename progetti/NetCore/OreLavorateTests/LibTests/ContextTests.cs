using Microsoft.Extensions.DependencyInjection;
using OreLavorateLib.Context;
using System;
using Xunit;

namespace OreLavorateTests.LibTests
{
    public class ContextTests
    {
        private readonly IServiceProvider Services;
        public ContextTests()
        {
            var conf = new ConfigureTestServices();
            this.Services = conf.Services;
        }

        [Fact]
        public void Test_Context()
        {
            using (var ctx = Services.GetRequiredService<OrelavorateContext>())
            {
                Assert.True(ctx.Database.CanConnect(), "db can't connect");
            }
        }
    }
}
