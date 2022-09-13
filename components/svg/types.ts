import { SVGProps } from 'react';

export interface SVGModule {
  (props: SVGProps<SVGSVGElement>): JSX.Element
}

export type DetailedProps<Element = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<Element>, Element>
