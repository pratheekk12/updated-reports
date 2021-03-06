import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Paper,
  Snackbar,
  TextField,
  Tooltip
} from '@material-ui/core';

export const orderColumns = [
  {
    field: 'OrderNumber',
    headerName: 'Order ID',
    renderCell: rowData => (
      <Link to={`/dash360/admin/orders/${rowData.row.OrderNumber}`}>
        {rowData.row.OrderNumber}
      </Link>
    )
  },
  {
    field: 'CreatedType',
    flex: 1,
    headerName: 'Created Type'
  },
  {
    field: 'StatusKey',
    flex: 1,
    headerName: 'Status'
  },
  {
    flex: 1,
    field: 'CreatedOn',
    headerName: 'Created On'
  }
];

export const invoicesColumns = [
  {
    renderCell: rowData => (
      <Link to={`/dash360/admin/invoices/${rowData.row.InvoiceNumber}`}>
        {rowData.row.InvoiceNumber}
      </Link>
    ),
    headerName: 'Invoice Number',
    field: 'InvoiceNumber',
    flex: 1
  },
  {
    field: 'InvoiceAmount',
    headerName: 'Amount',
    flex: 1
  },
  {
    field: 'Status',
    headerName: 'Status',
    flex: 1
  },
  {
    field: 'BillingMobile',
    headerName: 'Billing Mobile',
    flex: 1
  }
];


export const lastFiveCallData = [
  // {
  //   // renderCell: rowData => (
  //   //   <Link to={`/dash360/admin/agentlastfive/${rowData.row.InvoiceNumber}`}>
  //   //     {rowData.row.InvoiceNumber}
  //   //   </Link>
  //   // ),
  //   headerName: 'Unique ID',
  //   field: 'asterixUniqueID',
  //   flex: 1
  // },

  {
    field: 'CallerName',
    headerName: 'CallerName',
    flex: 1
  },
  {
    field: 'callerapplication',
    headerName: 'Caller application',
    flex: 1
  },
  {
    field: 'issuetype',
    headerName: 'issuetype',
    flex: 1
  },
  {
    field: 'devicetype',
    headerName: 'devicetype',
    flex: 1
  },
  {
    field: 'connectivitytype',
    headerName: 'connectivitytype',
    flex: 1
  },
  {
    field: 'ostype',
    headerName: 'ostype',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1
  },
  {
    field: 'subcategory',
    headerName: 'Subcategory',
    flex: 1
  },
  {
    field: 'subcategoryitem',
    headerName: 'Subcategory item',
    flex: 1
  },
  {
    field: 'issuedescription',
    headerName: 'issuedescription',
    flex: 1
  },
  {
    field: 'solution',
    headerName: 'solutions',
    flex: 1
  },
  {
    field: 'comments',
    headerName: 'comments',
    flex: 1
  },
  {
    field: 'type',
    headerName: 'issue status',
    flex: 1
  }
];

export const AgentCallColumns = [
  {
    // renderCell: rowData => (
    //   <Link to={`/dash360/admin/agentlastfive/${rowData.row.InvoiceNumber}`}>
    //     {rowData.row.InvoiceNumber}
    //   </Link>
    // ),
    headerName: 'Unique ID',
    field: 'asterixUniqueID',
    flex: 1
  },
  // {
  //   field: 'agentID',
  //   headerName: 'Agent ID',
  //   flex: 1
  // },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1
  },
  {
    field: 'subcategory',
    headerName: 'Sub Category',
    flex: 1
  },
  {
    field: 'solution',
    headerName: 'solution',
    flex: 1
  },
  {
    field: 'comments',
    headerName: 'Comments',
    flex: 1
  },
  {
    field: 'created',
    headerName: 'Date',
    flex: 1
  }
];
export const DistributerCallColumns = [
  {
    // renderCell: rowData => (
    //   <Link to={`/dash360/admin/agentlastfive/${rowData.row.InvoiceNumber}`}>
    //     {rowData.row.InvoiceNumber}
    //   </Link>
    // ),
    headerName: 'Unique ID',
    field: 'asterixUniqueID',
    flex: 1
  },
  // {
  //   field: 'agentID',
  //   headerName: 'Agent ID',
  //   flex: 1
  // },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1
  },
  {
    field: 'subcategory',
    headerName: 'Sub Category',
    flex: 1
  },
  {
    field: 'solution',
    headerName: 'solution',
    flex: 1
  },
  {
    field: 'comments',
    headerName: 'Comments',
    flex: 1
  },
  {
    field: 'created',
    headerName: 'Date',
    flex: 1
  }
];

export const CallerInteractioncolumns = [
  {
    field: 'CallerName',
    headerName: 'CallerName',
    flex: 1
  },
  {
    field: 'callerapplication',
    headerName: 'Caller Application',
    flex: 1
  },
  {
    field: 'issuetype',
    headerName: 'Issue Type',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Patner Name',
    flex: 1
  },
  {
    field: 'seccategory',
    headerName: 'Tag',
    flex: 1
  },
  {
    field: 'subcategory',
    headerName: 'Sub Tag 1',
    flex: 1
  },
  {
    field: 'secsubcategory',
    headerName: 'Sub Tag 2',
    flex: 1
  },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1
  },

  {
    field: 'comments',
    headerName: 'comments',
    flex: 1
  },

  {
    field: 'created',
    headerName: 'Date',
    flex: 1
  },
  {
    field: 'callermobilenumber',
    headerName: 'caller Number',
    flex: 1
  }
];

export const CallsinQueuecolumns = [
  {
    field: 'CallerName',
    headerName: 'Time',
    width: 130
  },
  {
    field: 'callerapplication',
    headerName: 'Queue',
    flex: 1
  },
  {
    field: 'issuetype',
    headerName: 'Caller Phone Number',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Duration in Queue',
    flex: 1
  },
  {
    field: 'Server',
    headerName: 'Server',
    flex: 1
  },
];

// callsinQueuecolumns, LiveCallscolumns, LiveCallscolumns2, omrIdleAgents, ChennaiIdleAgents

export const AgentLiveCallscolumns = [
  {
    field: 'CallerName',
    headerName: 'Agent Name',
    flex: 1
  },
  {
    field: 'callerapplication',
    headerName: 'Agent ID',
    flex: 1
  },
  {
    field: 'callerapplication',
    headerName: 'Caller Phone Number',
    flex: 1
  },
  {
    field: 'issuetype',
    headerName: 'Location',
    flex: 1
  },
  {
    field: 'category',
    headerName: 'Duration ',
    flex: 1
  },
  {
    field: 'Server',
    headerName: 'Server',
    flex: 1
  },
];

export const AgentLivestatuscolumns = [
  {
    field: 'sl.no',
    headerName: 'SL NO',
    flex: 1
  },
  {
    field: 'EmployeeName',
    headerName: 'Agent Name',
    flex: 1
  },
  {
    field: 'agentID',
    headerName: 'Agent Number',
    flex: 1
  },
  {
    field: 'EmailID',
    headerName: 'Email ID',
    flex: 1
  },
  {
    field: 'agentCallStatus',
    headerName: 'Agent Status ',
    flex: 1
  },
  {
    field: 'agentCallDispositionStatus',
    headerName: 'Disposition',
    flex: 1
  },
  {
    field: 'Location',
    headerName: 'Location',
    flex: 1
  },
  {
    field: 'breakStatus',
    headerName: 'Break Status',
    flex: 1
  },
  {
    field: 'Server',
    headerName: 'server',
    flex: 1
  },

];

export const AgentLivestatuscolumns1 = [
  {
    name: 'sl.no',
    label: 'SL NO',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },

  {
    name: 'EmployeeName',
    label: 'Agent Name',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'agentID',
    label: 'Agent Number',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'EmailID',
    label: 'Email ID',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'agentCallStatus',
    label: 'Agent Status ',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'agentCallDispositionStatus',
    label: 'Disposition',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'Location',
    label: 'Location',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'breakStatus',
    label: 'Break Status',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'difference',
    label: 'IDLE Time',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'Server',
    label: 'server',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'currentserver',
    label: 'current server',
    flex: 1,
    options: {
      filter: true,
      sort: true,
    }
  },

];

// export const callsinQueuecolumns = [
//   {
//     name: 'datetime_entry_queue',
//     label: 'Time',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },

//   {
//     name: 'Queue',
//     label: 'Queue',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'callerid',
//     label: 'Caller Phone Number',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'duration',
//     label: 'Duration in Queue',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'ServerIP',
//     label: 'Server',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   }
// ];

// export const LiveCallscolumns = [
//   {
//     name: 'EmployeeName',
//     label: 'Agent Name',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },

//   {
//     name: 'agentID',
//     label: 'Agent ID',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'callerid',
//     label: 'Caller Phone Number',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'Location',
//     label: 'Location',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'duration',
//     label: 'Duration',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: 'ServerIP',
//     label: 'server',
//     flex: 1,
//     options: {
//       filter: true,
//       sort: true,
//     }
//   }
// ];

export const callsinQueuecolumns = [
  // {
  //   field: 'datetime_entry_queue',
  //   label: 'Time',
  //   sort: 'asc',
  //   width: 150
  // },
  // {
  //   field: 'Queue',
  //   label: 'Queue',
  //   sort: 'asc',
  //   width: 150
  // },
  {
    field: 'callerid',
    label: 'Caller Phone Number',
    sort: 'asc',
    width: 70
  },
  {
    field: 'duration',
    label: 'Duration in Queue',
    sort: 'asc',
    width: 70
  },
  {
    field: 'ServerIP',
    label: 'Server',
    sort: 'asc',
    width: 70
  },
];

export const callsinQueuecolumns1 = [
  {
    field: 'datetime_entry_queue',
    label: 'Time',
    width: 150
  },
  {
    field: 'Queue',
    headerName: 'Queue',
    // sort: 'asc',
    width: 150
  },
  {
    field: 'callerid',
    headerName: 'Caller Phone Number',
    // sort: 'asc',
    width: 150
  },
  {
    field: 'duration',
    headerName: 'Duration in Queue',
    //sort: 'asc',
    width: 150
  },
  {
    field: 'ServerIP',
    headerName: 'Server',
    //sort: 'asc',
    width: 150
  },
];

export const LiveCallscolumns = [
  {
    field: 'EmployeeName',
    label: 'Employee Name',
    sort: 'asc',
    width: 70
  },
  {
    field: 'agentID',
    label: 'Agent ID',
    sort: 'asc',
    width: 70
  },
  {
    field: 'callerid',
    label: 'Caller Phone Number',
    sort: 'asc',
    width: 70
  },
  {
    field: 'Location',
    label: 'Location',
    sort: 'asc',
    width: 70
  },
  {
    field: 'duration',
    label: 'Duration',
    sort: 'asc',
    width: 70
  },
  // {
  //   field: 'ServerIP',
  //   label: 'Server',
  //   sort: 'asc',
  //   width: 150
  // },


];



export const LiveCallscolumns1 = [
  {
    field: 'sl_No',
    label: 'SL.No',
    sort: 'asc',
    width: 70
  },
  {
    field: 'Agent_Number',
    label: 'Agent Number',
    sort: 'asc',
    width: 150
  },
  {
    field: 'Agent_Name',
    label: 'Agent Name',
    sort: 'asc',
    width: 150
  },
  {
    field: 'Caller_Name',
    label: 'Caller Name',
    sort: 'asc',
    width: 150
  },
  {
    field: 'callerNumber',
    label: 'callerNumber',
    sort: 'asc',
    width: 150
  },

  {
    field: 'callerapplication',
    label: 'callerapplication',
    sort: 'asc',
    width: 150
  },

  {
    field: 'callType',
    label: 'callType',
    sort: 'asc',
    width: 150
  },
  {
    field: 'issuetype',
    label: 'issuetype',
    sort: 'asc',
    width: 150
  },

  {
    field: 'category',
    label: 'category',
    sort: 'asc',
    width: 150
  },
  {
    field: 'subcategory',
    label: 'subcategory',
    sort: 'asc',
    width: 150
  },
  {
    field: 'subcategoryitem',
    label: 'subcategoryitem',
    sort: 'asc',
    width: 150
  },
  {
    field: 'connectivitytype',
    label: 'connectivitytype',
    sort: 'asc',
    width: 150
  },
  {
    field: 'ostype',
    label: 'ostype',
    sort: 'asc',
    width: 150
  },
  {
    field: 'solution',
    label: 'solution',
    sort: 'asc',
    width: 150
  },
  {
    field: 'comments',
    label: 'comments',
    sort: 'asc',
    width: 150
  },
  {
    field: 'asterixUniqueID',
    label: 'asterixUniqueID',
    sort: 'asc',
    width: 150
  },
  {
    field: 'solution',
    label: 'solution',
    sort: 'asc',
    width: 150
  },
  {
    field: 'comments',
    label: 'comments',
    sort: 'asc',
    width: 150
  },
  {
    field: 'distributerID',
    label: 'distributerID',
    sort: 'asc',
    width: 150
  },
  {
    field: 'distributerName',
    label: 'distributerName',
    sort: 'asc',
    width: 150
  },
  {
    field: 'createdAt',
    label: 'createdAt',
    sort: 'asc',
    width: 150
  },
  {
    field: 'updatedAt',
    label: 'updatedAt',
    sort: 'asc',
    width: 150
  },

];

export const LiveCallscolumns2 = [

  {
    field: 'sl.no',
    label: 'SL.NO',
    sort: 'asc',
    width: 150
  },
  {
    field: 'EmployeeName',
    label: 'Employee Name',
    sort: 'asc',
    width: 150
  }, {
    field: 'agentID',
    label: 'AgentID',
    sort: 'asc',
    width: 150
  }, {
    field: 'EmailID',
    label: 'Email ID',
    sort: 'asc',
    width: 150
  }, {
    field: 'agentCallStatus',
    label: 'Agent Call Status',
    sort: 'asc',
    width: 150
  }, {
    field: 'agentCallDispositionStatus',
    label: 'Disposition',
    sort: 'asc',
    width: 150
  },
  {
    field: 'breakStatus',
    label: 'Break Status',
    sort: 'asc',
    width: 150
  }, {
    field: 'Location',
    label: 'Location',
    sort: 'asc',
    width: 150
  }, {
    field: 'Server',
    label: 'Server',
    sort: 'asc',
    width: 150
  },
  {
    field: 'currentserver',
    label: 'Current Server',
    sort: 'asc',
    width: 150
  },
  {
    field: 'difference',
    label: 'Idle Time',
    sort: 'asc',
    width: 150
  },
  {
    field: 'missedCalls',
    label: 'Missed Calls',
    sort: 'asc',
    width: 150
  },
  {
    field: 'answeredCalls',
    label: 'Answered Calls',
    sort: 'asc',
    width: 150
  },

];

export const profilesColumns = [
  { 
    headerName : 'SL.No',
    field: 'id',
    flex: 1
  },
  {
    headerName: 'First Name',
    field: 'firstName',
    flex: 1
   
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    flex: 1
  }, 
  {
    headerName: 'Role',
    field: 'role',
    flex: 1
  }, {
    headerName: 'Applied Date',
    field: 'created_At',
    flex: 1
  }, {
    headerName: 'Profile status',
    field: 'prrofileStatus',
    flex: 1
  },
  {
    headerName: 'updated_At',
    field: 'updated_At',
    flex: 1
  },
  {
    headerName: 'Actions',
    field: '',
    renderCell: rowData => (
      <>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => alert(`hi`)}
          >
            bjbh
          </IconButton>
        </Tooltip>
      </>
    ),
    flex: 1
  },
];

export const ChennaiIdleAgents = [
  {
    field: 'EmployeeName',
    label: 'Name',
    sort: 'asc',
    width: 70
  }, {
    field: 'agentID',
    label: 'Agent ID',
    sort: 'asc',
    width: 70
  },
  // {
  //   field: 'EmailID',
  //   label: 'Email ID',
  //   sort: 'asc',
  //   width: 150
  // }, 
  {
    field: 'agentCallStatus',
    label: 'Agent status',
    sort: 'asc',
    width: 70
  }, {
    field: 'agentCallDispositionStatus',
    label: 'Disposition',
    sort: 'asc',
    width: 70
  },
  {
    field: 'breakStatus',
    label: 'Break status',
    sort: 'asc',
    width: 70
  },
  {
    field: 'difference',
    label: 'Idle Time',
    sort: 'asc',
    width: 70
  },

];

export const omrIdleAgents = [

  {
    field: 'EmployeeName',
    label: 'Name',
    sort: 'asc',
    width: 70
  }, {
    field: 'agentID',
    label: 'Agent ID',
    sort: 'asc',
    width: 70
  },
  // {
  //   field: 'EmailID',
  //   label: 'Email ID',
  //   sort: 'asc',
  //   width: 150
  // }, 
  {
    field: 'agentCallStatus',
    label: 'Agent status',
    sort: 'asc',
    width: 150
  }, {
    field: 'agentCallDispositionStatus',
    label: 'Disposition',
    sort: 'asc',
    width: 70
  },
  // {
  //   field: 'breakStatus',
  //   label: 'Break Status',
  //   sort: 'asc',
  //   width: 70
  // },
  {
    field: 'difference',
    label: 'Idle Time',
    sort: 'asc',
    width: 70
  },

];

export const profilesColumns1 = [
  {
    field: 'slNo',
    headerName: 'Sl.No',
    flex: 1
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    flex: 1
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    flex: 1
  }, {
    field: 'role',
    headerName: 'Role',
    flex: 1
  }, {
    field: 'created_At',
    headerName: 'Applied Date',
    flex: 1
  }, {
    field: 'prrofileStatus',
    headerName: 'Resume Status',
    flex: 1
  },
  {
    field: 'updated_At',
    width: 150,
    headerName: 'Last Updated',
    flex: 1
  },
];

export const profilesColumns2 = [

  { 
    headerName : 'SL.No',
    field: 'sl.no',
    width: 150,
  },
  {
    headerName: 'First Name',
    field: 'firstName',
    width: 150,
   
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    width: 150,
  }, 
  {
    headerName: 'Role',
    field: 'role',
    width: 150,
  }, {
    headerName: 'Applied Date',
    field: 'created_At',
    width: 150,
  }, {
    headerName: 'Profile status',
    field: 'prrofileStatus',
    width: 150,
  },
  {
    headerName: 'updated_At',
    field: 'updated_At',
    width: 150,
  },
  {
    headerName: 'Reference_ID',
    field: '_id',
    width: 150,
  },
];



