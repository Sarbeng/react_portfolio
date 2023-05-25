import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

//adding smooth scroll whenever an anchor tag is clicked

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    //const id = "projects-section"
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  //setting a state to keep scroll position
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0
  })

  const currentScrollPosition = useRef(0);

  // state to show and hide nav
  const [showNav, setShowNav] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      setScrollData(prevState => {
        return{
          y: window.scrollY,
          lastY: prevState.y
        }
      },
        )
        currentScrollPosition.current = scrollData.lastY;
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll',handleScroll)
  },[])

  useEffect(()=>{
    console.log(scrollData)

    if (scrollData.y > currentScrollPosition.current){
      setShowNav(true);
    }
    else{
      setShowNav(false);
    }
  },[scrollData])
 
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      className={showNav ? "hideNav" : ""}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          
         
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
            {socials.map((social) => 
            <a key={social.icon.iconName}  href={social.url} ><FontAwesomeIcon icon={social.icon} size="2x"  /></a>
            )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects"  onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme"  onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
