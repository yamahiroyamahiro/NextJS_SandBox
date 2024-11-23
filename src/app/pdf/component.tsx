import type { FC } from "react";
import Image from "next/image";

export const Component: FC = () => {
  return (
    <>
      <div id="pdf-id">
        <span>PDFに変換されるComponent</span>
        <Image
          src="/pexels-sarah-dorweiler-8408541.jpg"
          alt="鹿"
          width={4272 * 4}
          height={2848 * 4}
        />
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>PDFに変換されるComponent</p>
        <p>FINISH-PDFに変換されるComponent</p>
      </div>
    </>
  );
};
