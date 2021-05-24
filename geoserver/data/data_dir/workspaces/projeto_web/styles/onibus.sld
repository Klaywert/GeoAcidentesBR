<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>onibus</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Onibus</Title>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
        <Rule>
          <Name>onibus</Name>
			 <PointSymbolizer>
					  <Graphic>
						<ExternalGraphic>
						   <OnlineResource
							 xlink:type="simple"
							 xlink:href="onibus.png"/>
						   <Format>image/png</Format>
						 </ExternalGraphic>
						 <Size>20</Size>
					</Graphic>
				  </PointSymbolizer>
            
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>