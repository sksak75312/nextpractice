import { ReactNode } from "react";
function NewsSlugLayout({ children, modal}: {children: ReactNode; modal: ReactNode}) {
  return <>
    {modal}
    {children}
  </>
}

export default NewsSlugLayout;