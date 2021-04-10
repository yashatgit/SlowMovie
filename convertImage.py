#!/usr/bin/python
# -*- coding:utf-8 -*-


import os
import time
import sys
import random
from PIL import Image

# Ensure this is the correct path to your video folder
viddir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'Videos/')

# Ensure this is the correct driver for your particular screen
try:
    width = 800
    height = 480

    # frame_red = [0] * (width * height / 8)

    # Open grab.jpg in PIL
    # Dither the image into a 1 bit bitmap (Just zeros and ones)
    pil_im = Image.open(sys.argv[1])
    pil_im = pil_im.convert(mode='1', dither=Image.FLOYDSTEINBERG)

    pil_im.save('convertedImage.png')

    # # since we don't want to paing anything on red. Keep it to mininimum
    image_Other = Image.new('1', (height, width), 255)  # 255: clear the frame
    # # image_Other = pil_im.convert(
    # #     mode='1', dither=Image.FLOYDSTEINBERG)  # 255: clear the frame

    print('displayed')

# NB We should run sleep() while the display is resting more often, but there's a bug in the driver that's slightly fiddly to fix. Instead of just sleeping, it completely shuts down SPI communication

except KeyboardInterrupt:
    logging.info("ctrl + c:")
    epd7in5.epdconfig.module_exit()
    exit()
