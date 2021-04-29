import React from 'react';
import {BottomSectionContainer, BottomSectionContent, BottomItems, BottomItem,
    BottomSectionP, Border} from './BottomSection.style';

import Footer from '../../../components/Footer'




// BottomSection - container, contextSection, footer  
function BottomSection() {
    return (
        <BottomSectionContainer>
            <BottomSectionContent>
                {/* <BottomSectionH1>ADD... </BottomSectionH1> */}
                <BottomItems>
                    <BottomItem>
                        <BottomSectionP>Item 1</BottomSectionP>
                    </BottomItem>
                    <Border>
                        <BottomItem>
                            <BottomSectionP>Item 2</BottomSectionP>
                        </BottomItem>
                    </Border>
                    <BottomItem>
                        <BottomSectionP>Item 3</BottomSectionP>
                    </BottomItem>
                </BottomItems>
                
            </BottomSectionContent>
            <Footer></Footer>
        </BottomSectionContainer>
    )
}

export default BottomSection
