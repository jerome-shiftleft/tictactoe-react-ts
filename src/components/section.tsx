import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
}

const Section = ({children, ...props}: Props) => {
  return (
    <section {...props}>
      {children}
    </section>
  )
}

export default Section;