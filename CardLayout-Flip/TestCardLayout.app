<aura:application >
    <c:CardFlip aura:Id="myCardLayout">
        <div class="autobot card" />        
        
        <div class="decepticon card" />
        
        <div class="figleaf card" />
          
    </c:CardFlip>
    
    <div style="position:fixed; bottom:10px; border: 1px solid black">
    <ui:button label="Show Card 1"
        press="{!c.showCard1}" />
    <ui:button label="Show Card 2"
        press="{!c.showCard2}" />
    <ui:button label="Show Card 3"
        press="{!c.showCard3}" />
   </div>
</aura:application>