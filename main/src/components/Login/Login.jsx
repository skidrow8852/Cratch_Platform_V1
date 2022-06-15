import {Box,Text,Button,Center , Image ,Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,useDisclosure} from '@chakra-ui/react';
  import React from 'react';
  import Carousel from 'nuka-carousel';
  import qr from '../../assets/qr.png'
  import metamask from '../../assets/metamask.png'
  import walletconnect from '../../assets/walletconnect.png'
  import fortmatic from '../../assets/fortmatic.png'
  import nft from '../../assets/nft.gif'
  import world from '../../assets/meta.jpg'
  import platform from '../../assets/platform.jpg'
  import soon from '../../assets/soon.mp4'
  import {FaTwitter , FaReddit , FaTelegram , FaDiscord} from "react-icons/fa"
  import {useMoralis} from "react-moralis"
  
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
  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {authenticate} = useMoralis()


    const auth = async(wallet) => {
      await authenticate({signingMessage: "Log in using Metamask" })
    }

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
                      }} onClick={auth}>
                      <Box d="flex" ><Image src={metamask} width="3.5rem" alt="metamask" /> <Text pt={2.5} textAlign="center">MetaMask</Text></Box>
                      
                      </Button>
                      <Button width="100%" height="4rem" mb={5} bg="#EFF0F7" display="block" textAlign="left" _hover={{
                        boxShadow: '-0.1em 0 .4em #100B1C;'
                      }} onClick={onOpen}>
                      <Box d="flex" ><Image src={walletconnect} width="3.5rem" alt="walletconnect" /> <Text pt={2.5} textAlign="center">WalletConnect</Text></Box>
                      </Button>
                      <Button width="100%" height="4rem" mb={5} bg="#EFF0F7" display="block" textAlign="left" _hover={{
                        boxShadow: '-0.1em 0 .4em #100B1C;'
                      }} onClick={onOpen}>
                      <Box d="flex" ><Image src={fortmatic} width="2rem" alt="fortmatic" ml={4} mr={3}/> <Text pt={1} textAlign="center">Fortmatic</Text></Box>
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
      <Modal  isOpen={isOpen} onClose={onClose} bg="#F7F7FC">
          <ModalOverlay />
          <ModalContent bg="#F7F7FC">
            <ModalCloseButton />
            <ModalBody bg="#F7F7FC" borderRadius="5px">
              
              <Center width="100%" pt={10} pb={5} bg="#F7F7FC">
                  <video autoPlay="autoPlay" loop muted controls={false} style={{borderRadius: '5px'}}>
                    <source src={soon} type='video/mp4' >
                    </source>
                  </video>
                  
               </Center> 
               <Center d="flex" pb={5}>
                  <a href='https://twitter.com/Cratch_Official'><FaTwitter size="2rem" fill='#1D9BF0'/></a> &nbsp;&nbsp;
                  <a href='https://t.me/cratch_official'><FaTelegram size="2rem" fill='#35ADE1'/></a>&nbsp;&nbsp;
                  <a href='https://www.reddit.com/r/cratch_community/'><FaReddit size="2rem" fill='#FD4504'/></a> &nbsp;&nbsp;
                  <a href='https://discord.gg/KAbgyrm9kd'><FaDiscord size="2rem" fill='#5662E0'/></a> 
                </Center>
           </ModalBody>
          </ModalContent>
        </Modal>
  
      </Box>
      
      </>
    );
  }
  
  export default Login;
  