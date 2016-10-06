<aura:application >
   
   
    
    <c:cardEvent aura:Id="myCardLayout">
        <div class="autobot card" />        
        
        <div class="decepticon card" />
       
        
    </c:cardEvent>
    
    <div style="position:fixed; bottom:10px; border: 1px solid black">
        <ui:button label="Show Card 1"
                   press="{!c.showCard1}" />
        <ui:button label="Show Card 2"
                   press="{!c.showCard2}" />
    </div>
</aura:application>