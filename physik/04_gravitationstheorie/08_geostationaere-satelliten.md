---
title: Der Geostationäre Satellit
---

Ein **geostationärer Satellit** ist ein Satellit, der dieselbe **Winkelgeschwindigkeit $\omega$** besitzt wie die Erde (bzw. die Erdoberfläche).

$$\omega_\text{Satellit} = \omega_\text{Erde}$$

Das bedeutet dass der Satellit ==für eine Umkreisung der Erde genau so lange braucht wie die Erde für eine vollständige Umdrehung um die Erdachse== *(viz. 24h)* und dass der geostationäre Satellit von der Erde aus gesehen ==scheinbar an derselben Stelle am Himmel steht== *(eigentlich bewegt er sich aber mit der Erde mit)*.  
Er bewegt sich auf einer **Äquatorialbahn** *(Kreisbahn nur um den Äquator)*.  
*$\rightarrow$ Auf der Nordhalbkugel zeigt die Schüssel immer nach Süden.*  

Diese stationäre Position ist ==nur unter einem ganz bestimmten Bahnradius== möglich.  

Fernsehen: Satellitenfernsehen über Satellitenschüsseln *(zB. Astra Satelliten)*.  

## Herleitung der Formel für den Bahnradius

Um den erforderlichen Radius $r$ für einen geostationären Satelliten zu berechnen, nutzen wir das Gleichgewicht der Kräfte (Variante über das 3. Keplersche Gesetz).

$F_{Zp} = F_G$

Die Zentripetalkraft muss durch die Gravitationskraft aufgebracht werden:

$$m_2 \cdot \omega^2 \cdot r = G \cdot \frac{M \cdot m_2}{r^2}$$

$m_2 \dots$ Masse des Satelliten (kürzt sich auf beiden Seiten raus)  
$M \dots$ Masse der Erde  
$G \dots$ Gravitationskonstante  
$r \dots$ Bahnradius 

Daraus folgt:  

$$\omega^2 \cdot r^3 = G \cdot M$$

Es gilt:

$$\omega = \frac{2\pi}{T}$$

*Für einen geostationären Satelliten beträgt die Umdrehung 24h.*  

Quadrieren $\omega^2$:

$$\omega^2 = \frac{4\pi^2}{T^2}$$

Einsetzen $\omega^2$:

$$\frac{4\pi^2}{T^2} \cdot r^3 = G \cdot M$$

Nach $r$ umformen:

$$r^3 = \frac{G \cdot M \cdot T^2}{4\pi^2}$$

$$r = \sqrt[3]{\frac{G \cdot M \cdot T^2}{4\pi^2}}$$

