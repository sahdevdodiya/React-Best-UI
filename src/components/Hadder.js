import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        pos={"fixed"}
        top={'4'}
        left={'4'}
        colorScheme='purple'
        p={'0'}
        w={'10'}
        h={'10'}
        border={'full'}
        onClick={onOpen}
        // zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Video Hub
          </DrawerHeader>
          <DrawerBody>
          {/* div with alrey flex vsack alredy vertical*/}
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/'} >Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/videos'} >Video's</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
              {/* here go tok video but catogey free */}
                <Link to={'/videos?category=free'} >Free Video's</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/upload'} >Upload Video's</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <HashLink to={'/#footer'} >Footer</HashLink>
              </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'0'} left={'0'}  w={'full'} justifyContent={'center'} margin={'8'} >

              <Button onClick={onClose} colorScheme='purple'>
                <Link to={'/login'}>Login</Link>
              </Button>

              <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                <Link to={'/signup'}>Sign UP</Link>
              </Button>

            </HStack>
          </DrawerBody>
        </DrawerContent>

        {/* <DrawerFooter>
          <Button variant='outline' mr={300} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter> */}
      </Drawer>
    </div>
  );
};

export default Header;
