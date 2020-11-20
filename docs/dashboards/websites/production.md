---
title: Production Websites
sidebar_label: Production
---

| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo | OS | Infrastructure | Provisioning | Container engine | Doc | Team |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GW Engineering  | https://engineering.glasswallsolutions.com.glasswall-icap.com | 54.170.84.172 | B: Docker v0.1  |  443 | Live in testing |[GW engineering](https://github.com/k8-proxy/gp-engineering-website)|||
| GW Website      | https://glasswallsolutions.com.glasswall-icap.com             | 54.78.209.23  |A: K8s v0.1      | 443  | Live in testing |[Glasswall Solutions](https://github.com/k8-proxy/gp-glasswallsolutions-website)|||
| dataport.emma.msrb.org |https://dataport.emma.msrb.org.glasswall-icap.com/Home/Index and https://emma.msrb.org.glasswall-icap.com/|3.120.30.57|E: SOW v0.2|443|Live in testing|[Emma port](https://github.com/k8-proxy/gp-emma-dataport-website)|||
| UK Zones  | https://uk.zones.com.glasswall-icap.com | 54.78.104.24 |B: Docker v0.1| 443 | Live in testing |[UK zones](https://github.com/k8-proxy/gp-uk-zones-com)|
| owasp.org |https://owasp.org.glasswall-icap.com/|34.247.160.95|SOW v0.2|443|Live in testing|[OWASP](https://github.com/k8-proxy/gp-owasp-website)|
| Sharepoint server 2019   |https://www.nekoffice.com.glasswall-icap.com/sites/gwtest/SitePages/Home.aspx | 54.169.155.88|A: K8s v0.1||Live in testing|[Xamarines sharepoint](https://github.com/k8-proxy/gp-sharepoint/issues)|
| fortinet.com|https://www.fortinet.com.glasswall-icap.com/|18.156.64.216|ICAP deployed||Live in testing|[Fortinet](https://github.com/k8-proxy/gp-fortinet-website)|
| miniIO|https://min.io.glasswall-icap.com/|52.56.78.112|ICAP deployed||Live in testing|[MiniIO](https://github.com/k8-proxy/gp-v02-miniio)|
| Atlasian |https://os-summit.atlassian.net.glasswall-icap.com/browse/TASK-145|3.139.5.226|ICAP deployed||Live in testing|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| bsigroup.com/en-GB |https://www.bsigroup.com.glasswall-icap.com/|34.222.23.193|ICAP deployed||Live in testing| [bsigroup](https://github.com/k8-proxy/gp-bsigroup-website)|
| Mastercard|https://www.mastercard.co.uk.glasswall-icap.com/en-gb.html|18.216.36.55|ICAP deployed||Live in testing| [mastercard](https://github.com/k8-proxy/gp-mastercard-website)|
| Adarma|http://www.adarma.com.glasswall-icap.com/|54.244.172.39|ICAP deployed||Live in testing| [adarma](https://github.com/k8-proxy/gp-adarma-website)|
| microsoft.com |https://www.microsoft.com.glasswall-icap.com/|18.157.111.73|ICAP deployed||Live in testing| [Microsoft](https://github.com/k8-proxy/gp-microsoft-website)|




### Live websites with local DNS changes
| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo | OS | Infrastructure | Provisioning | Container engine | Doc | Team |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Internal sharepoint |saaspoc1.sharepoint.com|3.249.61.168|||Live in testing|[Internal sharepoint](gp-b-docker-v01-sharepoint)|
| Atlasian |os-summit.atlassian.net|20.56.152.40|||Live in testing|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| Atlasian |glasswall.atlassian.net|20.56.152.40|||Live in testing|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||
| Atlasian |api.media.atlassian.net|20.56.152.40|||Live in testing|[JIRA](https://github.com/k8-proxy/gp-jira-website)|||






### SOW based ICAP servers:
- icap01.glasswall-icap.com	54.155.107.189
- icap02.glasswall-icap.com	34.240.204.39
- 3.129.78.231
- 3.139.106.69
- Load balancer icap.glasswall-icap.com - 54.77.168.168
- Load balancer 3.139.22.215
- Both running on port 1344

### DNS mappings:
- gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com.glasswall-icap.com : 54.170.84.172
- www.glasswallsolutions.com.glasswall-icap.com : 54.78.209.23
- *.gov.uk.glasswall-icap.com , assets.publishing.service.gov.uk.glasswall-icap.com , www.gov.uk.glasswall-icap.com : 51.11.8.179
- For owasp: cse.google.com.glasswall-icap.com - 34.247.160.95 and google.com.glasswall-icap.com - 34.247.160.95

### Other notes:
*Flavour A for Proxy & ICAP from Flavour E SOW v0.3 (October 28th)




