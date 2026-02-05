from PIL import Image
import os

def convert_to_ico(input_path, output_path):
    img = Image.open(input_path)
    # Standard sizes for ICO
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save(output_path, format='ICO', sizes=sizes)
    print(f"Successfully converted {input_path} to {output_path}")

if __name__ == "__main__":
    convert_to_ico('favicon-optimized.png', 'favicon.ico')
