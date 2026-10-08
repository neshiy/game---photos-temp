$csharpCode = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class BattleAssetProcessor {
    public static void ProcessSprite(string inputPath, string outputPath, bool flipHorizontal) {
        using (Bitmap src = new Bitmap(inputPath)) {
            int w = src.Width;
            int h = src.Height;
            int minX = w, maxX = 0, minY = h, maxY = 0;

            // Find bounds where pixel is not white
            for (int x = 0; x < w; x++) {
                for (int y = 0; y < h; y++) {
                    Color c = src.GetPixel(x, y);
                    bool isWhite = (c.R > 230 && c.G > 230 && c.B > 230);
                    if (!isWhite) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            if (maxX < minX || maxY < minY) {
                minX = 0; maxX = w - 1; minY = 0; maxY = h - 1;
            }

            int cropW = maxX - minX + 1;
            int cropH = maxY - minY + 1;

            using (Bitmap dest = new Bitmap(cropW, cropH, PixelFormat.Format32bppArgb)) {
                for (int x = 0; x < cropW; x++) {
                    for (int y = 0; y < cropH; y++) {
                        Color c = src.GetPixel(minX + x, minY + y);
                        bool isWhite = (c.R > 230 && c.G > 230 && c.B > 230);
                        if (isWhite) {
                            dest.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        } else {
                            dest.SetPixel(x, y, c);
                        }
                    }
                }

                if (flipHorizontal) {
                    dest.RotateFlip(RotateFlipType.RotateNoneFlipX);
                }

                dest.Save(outputPath, ImageFormat.Png);
            }
        }
        Console.WriteLine("Processed " + outputPath);
    }

    public static void CropSingleHeart(string inputPath, string outputPath) {
        using (Bitmap src = new Bitmap(inputPath)) {
            int w = src.Width;
            int h = src.Height;
            // The image has 3 hearts side by side horizontally. We want just the first heart.
            // Let's find first heart bounds (left third of image)
            int minX = w, maxX = 0, minY = h, maxY = 0;
            for (int x = 0; x < w / 3 + 40; x++) {
                for (int y = 0; y < h; y++) {
                    Color c = src.GetPixel(x, y);
                    bool isWhite = (c.R > 230 && c.G > 230 && c.B > 230);
                    if (!isWhite) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            int cropW = maxX - minX + 1;
            int cropH = maxY - minY + 1;

            using (Bitmap dest = new Bitmap(cropW, cropH, PixelFormat.Format32bppArgb)) {
                for (int x = 0; x < cropW; x++) {
                    for (int y = 0; y < cropH; y++) {
                        Color c = src.GetPixel(minX + x, minY + y);
                        bool isWhite = (c.R > 230 && c.G > 230 && c.B > 230);
                        if (isWhite) {
                            dest.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        } else {
                            dest.SetPixel(x, y, c);
                        }
                    }
                }
                dest.Save(outputPath, ImageFormat.Png);
            }
        }
        Console.WriteLine("Heart processed: " + outputPath);
    }
}
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies "System.Drawing"
[BattleAssetProcessor]::ProcessSprite("D:\fun stuff\game - photos temp\assets\boss_raw.jpg", "D:\fun stuff\game - photos temp\assets\boss.png", $true)
[BattleAssetProcessor]::ProcessSprite("D:\fun stuff\game - photos temp\assets\player_raw.jpg", "D:\fun stuff\game - photos temp\assets\player.png", $false)
[BattleAssetProcessor]::ProcessSprite("D:\fun stuff\game - photos temp\assets\fire_raw.jpg", "D:\fun stuff\game - photos temp\assets\fire.png", $false)
[BattleAssetProcessor]::CropSingleHeart("D:\fun stuff\game - photos temp\assets\hearts.jpg", "D:\fun stuff\game - photos temp\assets\heart.png")
