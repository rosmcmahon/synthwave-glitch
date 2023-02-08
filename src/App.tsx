import React, { useEffect, useState } from 'react'
import { Anchor, Box, Button, Card, CardBody, Footer, Header, Heading, Page, PageContent, Text } from 'grommet'
import { FooterHot } from './components/FooterHot'
import { CodeBox } from './components/CodeBox'
import { Image } from './components/Image'
import { useThemeMode } from './utils/useThemeMode'
import { TypescriptHighlighter } from './components/TypescriptHighlighter'

function App() {

  const { mode } = useThemeMode()

  const codeLiteral = `
  export const func = (in1: number) => {
    //nonsense code
    console.log(in1++)
  }`

  return (
    <>
      <Header alignSelf='center' justify='center' direction='row'>
        {/* <Image 
          imageDark={new URL(`./assets/logo-dark.png`, import.meta.url)} 
          imageLight={new URL(`./assets/logo-light.png`, import.meta.url)}
        /> */}
        {/* <Heading 
          level={1} 
          contentEditable={true} 
          style={{fontSize: '13vw'}}
          className='synthwave'
        >
          Robocop 1987
        </Heading> */}
        <div className='synthwave' contentEditable={true}>Robocop 1987</div>
      </Header>

      <Page kind='narrow'> 
        <PageContent  direction='row-responsive' >
          <Card pad={'medium'}>
            
            <CodeBox>
              Directive 1: "Serve the public trust" <br/>
              Directive 2. "Protect the innocent" <br/>
              Directive 3. "Uphold the law" <br/>
              Directive 4. (Classified) 0xCAFEBABE system test... const t = ut * 1000; 0xCAFEBABE 100101000 JIFF Interchange Format #@$$
            </CodeBox>

          </Card>
        </PageContent>
      </Page>
      <FooterHot>(c) 1987 Paul Verhoeven</FooterHot>
    </>
  )
}

export default App
