require('./styles/index.module.css')
export { getStaticProps } from 'destack/build/server'
import { ContentProvider } from 'destack'

const Index = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <ContentProvider {...props} />

      <style global jsx>{`
        .gjs-pn-views-container {
          left: 0px !important;
          
        }
        
      `}</style>
    </div>    
  )
}
export default Index
