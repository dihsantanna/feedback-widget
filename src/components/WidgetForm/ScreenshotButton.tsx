import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import Loading from '../Loading';

interface ScreenshotButtonProp {
  screenshot: string | null,
  screenshotTook(screenshot: string | null): void,
}

export default function ScreenshotButton({ screenshotTook, screenshot }: ScreenshotButtonProp) {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakeScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    screenshotTook(base64image);

    setIsTakeScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="btn-printed"
        onClick={() => screenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
    type="button"
    className="btn-print"
    onClick={ handleTakeScreenshot }
  >
    { isTakeScreenshot ? <Loading /> : <Camera className="w-6 h6" /> }
  </button>
  )
}
