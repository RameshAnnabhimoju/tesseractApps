import { Studio } from 'sanity'
import { Helmet } from 'react-helmet-async'
import config from '../../../sanity.config'
import './StudioPage.css'

export default function StudioPage() {
  return (
    <>
      <Helmet>
        <title>Studio | TesseractApps</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div id="sanity-studio-root">
        <Studio config={config} />
      </div>
    </>
  )
}
