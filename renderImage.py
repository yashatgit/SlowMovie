#!/usr/bin/python
# -*- coding:utf-8 -*-


import os
import time
import sys
import random
from PIL import Image

# Ensure this is the correct import for your particular screen
from waveshare_epd import epd7in5bc_V2

# Ensure this is the correct path to your video folder
viddir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'Videos/')

# Ensure this is the correct driver for your particular screen
epd = epd7in5bc_V2.EPD()


# Initialise and clear the screen
epd.init()
epd.Clear()

try:
    width = 800
    height = 480

    # Open grab.jpg in PIL
    pil_im = Image.open("photo.jpg")

    # Dither the image into a 1 bit bitmap (Just zeros and ones)
    pil_im = pil_im.convert(mode='1', dither=Image.FLOYDSTEINBERG)

    # since we don't want to paing anything on red. Keep it to mininimum
    image_Other = Image.new('1', (height, width), 255)  # 255: clear the frame

    # display the image
    epd.display(epd.getbuffer(pil_im), epd.getbuffer(image_Other))

    # Wait for 10 seconds
    time.sleep(10)
    epd.sleep()

# NB We should run sleep() while the display is resting more often, but there's a bug in the driver that's slightly fiddly to fix. Instead of just sleeping, it completely shuts down SPI communication

except KeyboardInterrupt:
    logging.info("ctrl + c:")
    epd7in5.epdconfig.module_exit()
    exit()
