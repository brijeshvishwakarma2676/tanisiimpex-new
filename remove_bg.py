from PIL import Image

def make_white_transparent(image_path, output_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Check if the pixel is close to white (allow some tolerance for anti-aliasing)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

try:
    make_white_transparent("public/images/cargo_plane.png", "public/images/cargo_plane_clear.png")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
