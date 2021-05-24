<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  version="3.0">

  <xsl:output method="html" html-version="5.0"
    encoding="UTF-8" indent="no"
    doctype-system="about:legacy-compat"/>

  <xsl:template match="listing">
   <html>
    <head>
      <title>
        Arquivos para download
        <xsl:value-of select="@directory"/>
      </title>
      <style>
        h1 {color : white;background-color : #0086b2;}
        h3 {color : white;background-color : #0086b2;}
        body {font-family : sans-serif,Arial,Tahoma;
             color : black;background-color : white;}
        b {color : white;background-color : #0086b2;}
        a {color : black;} HR{color : #0086b2;}
        <!-- table td { padding: 5px; } -->
      </style>
    </head>
    <body>
      <h1>Arquivos para download
            <!-- <xsl:value-of select="@directory"/> -->
      </h1>
      <!-- <div style="margin-top: 10px; margin: auto;width: 775px;">						
		<a href="http://pmcg.org.br" target="pmcg">
			<img src="/img/logo_head.jpg" width="775px" height="150px"/>
		</a>
	  </div> -->
      <hr style="height: 1px;" />
      <table border="0">
        <tr>
          <th style="text-align: left;">Nome</th>
          <th style="text-align: center;" width="25%">Tamanho do arquivo</th>
          <!-- <th style="text-align: right;">Last Modified</th> -->
        </tr>
        <xsl:apply-templates select="entries"/>
        </table>
      <xsl:apply-templates select="readme"/>
      <hr style="height: 1px;" />
      <!-- <h3>Apache Tomcat/8.0</h3> -->
    </body>
   </html>
  </xsl:template>


  <xsl:template match="entries">
    <xsl:apply-templates select="entry"/>
  </xsl:template>

  <xsl:template match="readme">
    <hr style="height: 1px;" />
    <pre><xsl:apply-templates/></pre>
  </xsl:template>

  <xsl:template match="entry">
    <tr>
      <td style="text-align: left;">
        <xsl:variable name="urlPath" select="@urlPath"/>
        <a href="{$urlPath}">
          <pre><xsl:apply-templates/></pre>
        </a>
      </td>
      <td style="text-align: right;">
        <pre><xsl:value-of select="@size"/></pre>
      </td>
      <!-- <td style="text-align: right;">
        <pre><xsl:value-of select="@date"/></pre>
      </td> -->
    </tr>
  </xsl:template>

</xsl:stylesheet>