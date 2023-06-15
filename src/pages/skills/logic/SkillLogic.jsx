export const getAverageColor = async (src) => {
   return new Promise((resolve) => {
      let context = document.createElement('canvas').getContext('2d');
      context.imageSmoothingEnabled = true;
      let img = new Image();
      img.src = src;
      img.crossOrigin = '';
      img.onload = () => {
         context.drawImage(img, 0, 0, img.width, img.height);
         let imageData = context.getImageData(0, 0, img.width, img.height);
         let data = imageData.data;
         let nonTransparentPixels = 0;
         let r = 0;
         let g = 0;
         let b = 0;

         for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] != 0) {
               r += data[i];
               g += data[i + 1];
               b += data[i + 2];
               nonTransparentPixels++;
            }
         }
         r = Math.floor(r / nonTransparentPixels);
         g = Math.floor(g / nonTransparentPixels);
         b = Math.floor(b / nonTransparentPixels);
         let hex = rgbToHex({r, g, b});
         resolve(hex);
      };
   });
};



export const componentToHex = (c) => {
   var hex = c.toString(16);
   return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = ({r, g, b}) => {
   return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const getVisibleColor = (color) => {
   let r = parseInt(color.substring(1, 3), 16);
   let g = parseInt(color.substring(3, 5), 16);
   let b = parseInt(color.substring(5, 7), 16);

   let brightness = (r * 299 + g * 587 + b * 114) / 1000;

   if (brightness < 128) {
      return '#FFFFFF';
   } else {
      return '#000000';
   }
};

export function hexToRgb(hex) {
   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
   hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
   });
   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result
      ? [
         parseInt(result[1], 16),
         parseInt(result[2], 16),
         parseInt(result[3], 16),
      ]
      : null;
}

export function interpolateColors(color1, color2, steps) {
   const stepFactor = 1 / (steps - 1);
   const interpolatedColorArray = [];

   color1 = hexToRgb(color1);
   color2 = hexToRgb(color2);

   for (let i = 0; i < steps; i++) {
      interpolatedColorArray.push(
         rgbToHex(interpolateColor(color1, color2, stepFactor * i))
      );
      console.log(interpolateColor(color1, color2, stepFactor * i))
   }

   return interpolatedColorArray;
}

export function interpolateColor(color1, color2, factor = 0.5) {
   const result = color1.slice();
   for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
   }
   return {r:result[0], g:result[1], b:result[2]};
}

