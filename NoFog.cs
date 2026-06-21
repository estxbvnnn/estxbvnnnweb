using Oxide.Core;

namespace Oxide.Plugins
{
    [Info("NoFog", "estxbvn", "1.0.0")]
    [Description("Elimina la niebla del servidor automaticamente en todos los biomas.")]
    public class NoFog : RustPlugin
    {
        private static readonly string[] Biomes =
        {
            "arctic", "jungle", "temperate", "tundra", "arid"
        };

        private void OnServerInitialized()
        {
            Apply();
        }

        private void Apply()
        {
            foreach (string biome in Biomes)
            {
                Run("weather." + biome + "_fog_ramp_start 10000");

                Run("weather." + biome + "_fog_ambient_intensity_mult 0");
            }
        }

        private static void Run(string cmd)
        {
            ConsoleSystem.Run(ConsoleSystem.Option.Server.Quiet(), cmd);
        }
    }
}
