import {Box,Text,Button,Center , Image} from '@chakra-ui/react';
  import React from 'react';
  import Carousel from 'nuka-carousel';
  import qr from '../../assets/qr.png'
  import plug from '../../assets/plug.png'
  import infinity from '../../assets/infinity.jpg'
  import stoic from '../../assets/stoic.jpg'
  import nft from '../../assets/nft.gif'
  import world from '../../assets/meta.jpg'
  import platform from '../../assets/platform.jpg'
  import {StoicIdentity} from "ic-stoic-identity";
  
  class PagingDots extends React.Component {
    getIndexes(count, inc) {
      const arr = [];
      for (let i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    }
  
    getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        padding: 0,
      };
    }
  


    getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block',
      };
    }
  
    getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 28,
        opacity: active ? 1 : 0.5,
      };
    }
  
    render() {
      const indexes = this.getIndexes(
        this.props.slideCount,
        this.props.slidesToScroll,
      );
      return (
        <ul style={this.getListStyles()}>
          {indexes.map(index => {
            return (
              <li style={this.getListItemStyles()} key={index}>
                <button
                  style={this.getButtonStyles(this.props.currentSlide === index)}
                  onClick={this.props.goToSlide.bind(null, index)}
                >
                  &bull;
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  }
  
  function Login() {
  
const Connect = async() => {
  try{
    (async () => {
      try {
        const publicKey = await window.ic.plug.requestConnect();
        if(publicKey) {
          localStorage.setItem('user', window.ic.plug.sessionManager.sessionData.accountId)
          window.location.reload()
        }
      } catch (e) {
        console.log(e);
      }
    })();
    
  }catch(e) {
    console.log(e)
  }
  
}

const InfinityWallet = async() => {
  try{
    (async () => {
      try {
        const publicKey = await window.ic.infinityWallet.requestConnect();
        if(publicKey) {
          const principalId = await window.ic.infinityWallet.getPrincipal();
          localStorage.setItem('user', principalId.toText())
          window.location.reload()
        }
        
      } catch (e) {
        console.log(e);
      }
    })();
  }catch(e) {
    console.log(e)
  }
  
}

const Stoic = async() => {
  try{
    StoicIdentity.load().then(async identity => {

      identity = await StoicIdentity.connect();
      if(identity.getPrincipal().toText()) {
        localStorage.setItem('user', identity.getPrincipal().toText())
        window.location.reload()
      }
    
  })
}catch(e) {
  console.log(e)
}
  
}

    React.useEffect(()=>{
      localStorage.setItem('chakra-ui-color-mode','dark')
    },[])



    return (
  
      <>
      <Box bg="#111315" height="100vh" width="100vw" d="flex" fontFamily="Archivo,sans-serif" color="#1A202C">
      <Box width={["50%","50%","60%","60%"]} height="100%" bg="#F7F7FC" display={["none", "none","block","block","block"]}>
          <Center width="100%" height="100%">
            <Box width="70%" height="100%" >
            <Carousel enableKeyboardControls={true} renderBottomCenterControls={props => <PagingDots {...props} />} autoplay={true} autoplayInterval={5000} wrapAround={true} renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)}>
                <Box height="100%" width="100%" pt={5} pb={10}>
                  <Text as="h1" fontSize="2rem" fontWeight="bold" pb={3}>MetaCratch Universe</Text>
                  <Box  borderRadius="5px" height="90%"><Image src={world} borderRadius="10px" width="100%" alt="meta" /></Box>
                  
                  <Text as="h3" fontSize="1.8rem" fontWeight="bold"  pt={8}>Join the awesome <span style={{color: '#0d3ac1'}}>community</span></Text>
                  <Text as="h3" fontSize="1.1rem" pb={5}>Join one of the best Metaverse community in the crypto space. Create, play, earn and meet new friends.</Text>
                </Box>
                <Box height="100%" width="100%" pt={5} pb={10}>
                  <Text as="h1" fontSize="2rem" fontWeight="bold" pb={3}>Cratch World</Text>
                  <Box bg="#FDF1F4" borderRadius="5px" height="90%"><Image src={platform} borderRadius="10px" alt="meta" /></Box>
                  <Text as="h3" fontSize="1.8rem" fontWeight="bold"  pt={8}><span style={{color: '#0d3ac1'}}>Create, Watch & Earn</span> in Cratch</Text>
                  <Text as="h3" fontSize="1.1rem" pb={5}>Share your content in Cratch and create a brand, commuity. Go live and experience a new world of MetaStreams.
                  </Text>
                </Box>
                <Box height="100%" width="100%" pt={5} pb={10}>
                  <Text as="h1" fontSize="2rem" fontWeight="bold" pb={3}>NFTs only in MobiCratch</Text>
                  <Box bg="#EDF9FE" borderRadius="5px" height="90%"><Image src={nft} borderRadius="10px" alt="meta" /></Box>
                  <Text as="h3" fontSize="1.8rem" fontWeight="bold"  pt={8}>Monthly <span style={{color: '#0d3ac1'}}>NFT</span> airdrop</Text>
                  <Text as="h3" fontSize="1.1rem" pb={5}>Download MobiCratch to experience the future of video sharing, live streaming and digital content.
                  Win valuable NFTs only in MobiCratch.
                  </Text>
                </Box>
            </Carousel>
            </Box>
          </Center>
      </Box>
  
      <Box width={["100%","100%","50%","40%","40%"]} height="100%" bg="#100B1C" >
          <Center width="100%" height="100%">
              <Box width="80%" height="90%">
                <Center width="100%" height="100%">
                  <Box width="100%" height="100%" bg="#F7F7FC" borderRadius="8px">
                    <Center width="100%" height="100%">
                      <Box width="90%" height="90%">
                      <Text as="h1" fontSize="1.8rem" fontWeight="bold" pb={2}>
                        Sign in
                      </Text>
                      <Text as="p" fontSize="1rem" color="#716E85" pb={10}>Log in with your Wallet</Text>
                      
                      <Button width="100%" height="4rem" mb={5} bg="#EFF0F7" display="block" textAlign="left" _hover={{
                        boxShadow: '-0.1em 0 .4em #100B1C;'
                      }} onClick={Connect}>
                      <Box d="flex" ><Image src={plug} width="3.5rem" alt="Plug" /> <Text pt={4} textAlign="center">Plug wallet</Text></Box>
                      
                      </Button>
                      <Button width="100%" height="4rem" mb={5} bg="#EFF0F7" display="block" textAlign="left" _hover={{
                        boxShadow: '-0.1em 0 .4em #100B1C;'
                      }} onClick={InfinityWallet}>
                      <Box d="flex" ><Image borderRadius="50%" ml={2} src={infinity} width="2.8rem" alt="infinity" /> <Text pl={3} pt={3} textAlign="center">Infinity wallet</Text></Box>
                      </Button>
                      <Button width="100%" height="4rem" mb={5} bg="#EFF0F7" display="block" textAlign="left" _hover={{
                        boxShadow: '-0.1em 0 .4em #100B1C;'
                      }} onClick={Stoic}>
                      <Box d="flex" ><Image src={stoic} width="2.5rem" alt="stoic" ml={2.5} mr={3}/> <Text pt={2.5} textAlign="center">Stoic wallet</Text></Box>
                      </Button>
  
                      <Center width="100%" pt={5} >
                        <Image src={qr} alt="qr" />
                      </Center>
                      </Box>
                    </Center>
                  </Box>
                </Center>
              </Box>
          </Center>
      </Box>
  
      </Box>
      
      </>
    );
  }
  
  export default Login;
  