<div>
    <MenuItem
            active={selected === 'Dashboard'}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected('Dashboard')}
            icon={<HomeOutlined />}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Dashboard
            </Link>
          </MenuItem>
          <SubMenu
            title="Data"
            icon={<PeopleOutlined />}
            style={{ color: colors.grey[100] }}
          >
            <MenuItem
              active={selected === 'Manage Team'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Manage Team')}
              icon={<PeopleOutlined />}
            >
              <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }}>
                Manage Team
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'Contacts Information'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Contacts Information')}
              icon={<ContactsOutlined />}
            >
              <Link to="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contacts Information
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'Invoices Balances'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Invoices Balances')}
              icon={<ReceiptOutlined />}
            >
              <Link to="/invoices" style={{ textDecoration: 'none', color: 'inherit' }}>
                Invoices Balances
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title="Pages"
            icon={<PersonAddOutlined />}
            style={{ color: colors.grey[100] }}
          >
            <MenuItem
              active={selected === 'Profile Form'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Profile Form')}
              icon={<PersonAddOutlined />}
            >
              <Link to="/form" style={{ textDecoration: 'none', color: 'inherit' }}>
                Profile Form
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'Calendar'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Calendar')}
              icon={<CalendarTodayOutlined />}
            >
              <Link to="/calendar" style={{ textDecoration: 'none', color: 'inherit' }}>
                Calendar
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'FAQ Page'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('FAQ Page')}
              icon={<HelpOutline />}
            >
              <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
                FAQ Page
              </Link>
            </MenuItem>
          </SubMenu>  
          <SubMenu
            title="Charts"
            icon={<BarChartOutlined />}
            style={{ color: colors.grey[100] }}
          >
            <MenuItem
              active={selected === 'Bar Chart'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Bar Chart')}
              icon={<BarChartOutlined />}
            >
              <Link to="/bar" style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Bar Chart
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'Pie Chart'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Pie Chart')}
              icon={<PieChartOutline />}
            >
              <Link to="/pie" style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Pie Chart
              </Link>
            </MenuItem>
            <MenuItem
              active={selected === 'Line Chart'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Line Chart')}
              icon={<TimelineOutlined />}
            >
              <Link to="/line" style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Line Chart
              </Link>
            </MenuItem> 
            <MenuItem
              active={selected === 'Geography Chart'}
              style={{ color: colors.grey[100] }}
              onClick={() => setSelected('Geography Chart')}
              icon={<MapOutlined />}
            >
              <Link to="/geography" style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Geography Chart
              </Link>
            </MenuItem>
          </SubMenu>
          {/* OTHER PAGES */}
          <MenuItem
            active={selected === 'Profile'}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected('Profile')}
            icon={<PersonAddOutlined />}
          >
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem
            active={selected === 'Settings'}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected('Settings')}
            icon={<HelpOutline />}
          >
            <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Settings
            </Link>
          </MenuItem>
          <MenuItem
            active={selected === 'Logout'}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected('Logout')}
            icon={<HelpOutline />}
          >
            <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' } }
            >
              Logout
            </Link>
          </MenuItem>
</div>