import React, { Component } from 'react'

import { Icon } from '@kube-design/components'

import styles from './index.scss'

export default class IconTmp extends Component {
  state = {
    icons:
      'alarm-object, android, golang, gradle, java, javascript, nodejs, php, python, ascending, caret-down, caret-left, caret-right, caret-up, chevron-down, chevron-left, chevron-right, chevron-up, descending, next, previous, return, sort-ascending, sort-descending, sorting, triangle-down, triangle-left, triangle-right, triangle-up, arch-linux, centos, coreos, debian, fedora, freebsd, ios, linux, macos, opensuse, oracle-linux, redhat, ubuntu, windows, aliyun, aws, bitbucket, ceph, etcd, git, github, gitlab, glusterfs, google-plus, helm, istio, jenkins, kubernetes, kubesphere, openpitrix, power, qingcloud, sonarqube, svn, vmware, add, cardview, changing-over, check, close, collapse, copy, download, drag-handle, expand, export, link, listview, logout, maximize, minimize, more, pause, pull, refresh, restart, shutdown, start, stop, substract, upload, vnc, abtest, acl, admin, ai, api, appcenter, application, approve, area, backup, barchart, bell, bi, bigdata, bill, binary, bird, blockchain, blue-green-deployment, bm, box, branch, broom, browser, calendar, camera, car, cart, catalog, cdn, certification, circle-down, circle-up, client, clock, cloud, cluster, coding, cogwheel, column, commit, components, computing, container, cookie, cpe, cpu, creditcard, cron-job, csv, dashboard, data, database, deal, deamon-set, debug, desktop-group, dingtalk, discount, display, dns, docker, documentation, dot, earth, eip-group, eip-pool, eip, email, enterprise, error, exclamation, eye-closed, eye, file, filter, firewall, folder, fuse, gateway, gpu, group, hammer, home, human, image, increase, information, insert-chart, ip-port, ip, ipv6, item, jar, job, key, laptop, layer, licenses, linechart, listener, loadbalancer, lock, log, login-accounts, login-servers, loudspeaker, magnifier, mail, memory, mgmt-node, minus-square, mirroring, monitor, nat, network-card, network-router, network, nodes, notes, os-service, os, paper, passport, pdf, pen, picture, pie-chart, pin, plus-square, pod, port, price, project, proportion, question, radio, record, remark, report, resource, role, router, safe-notice, scaling, scheduler, scissors, select, shield, slack, slider, snapshot, springcloud, springcloudgateway, ssd, ssh, star, starter, stateful-set, step, storage, strategy-group, stretch, success, table-chart, tag, target, templet, terminal, text, textarea, textfield, theme, thunder, ticket, timed-task, topology, trash, update, usb-redirection, user-overview, user-profile, v2v, vnas, vpn, vsan, wallet, war, webhook, wecom, wrench, xls, zone',
  }

  render() {
    const array = this.state.icons.split(', ')
    return (
      <div className={styles.wrap}>
        {array.map(item => {
          return <Icon key={item} name={item} size={40} />
        })}
      </div>
    )
  }
}
